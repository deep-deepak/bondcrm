// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** JWT import
import jwt from 'jsonwebtoken'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from './types'
import { jwtConfig } from 'src/constants'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

type LoginResponse = {
  error?: {
    email?: string[]
    error?: string
  },
  accessToken?: any
  userData?: any
}

const users: UserDataType[] = [
  {
    id: 1,
    role: 'admin',
    password: 'admin',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'admin@vuexy.com'
  },
  {
    id: 2,
    role: 'client',
    password: 'client',
    fullName: 'Jane Doe',
    username: 'janedoe',
    email: 'client@vuexy.com'
  }
]

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      if (storedToken) {
        setLoading(true)
        const response = getLoginUser(storedToken);
        if (response) {
          setUser({ ...response.userData })
        } else {
          localStorage.removeItem('userData')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('accessToken')
          setUser(null)
          setLoading(false)
          if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
            router.replace('/login')
          }
        }
      }
      setLoading(false)
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    try {
      const response: LoginResponse = loginUser(params);
      if (typeof response.error != "undefined") {
        throw new Error(JSON.stringify(response.error));
      }
      params.rememberMe
        ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.accessToken)
        : null
      const returnUrl = router.query.returnUrl

      setUser({ ...response.userData })
      params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.userData)) : null

      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

      router.replace(redirectURL as string)

    } catch (error: any) {
      if (errorCallback) errorCallback(error)
    }
  }

  // Custom login user function
  const loginUser = (params: LoginParams) => {
    const { email, password } = params

    let error = {
      email: ['Something went wrong']
    }

    const user = users.find(u => u.email === email && u.password === password)

    if (user) {
      const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret as string, { expiresIn: jwtConfig.expirationTime })

      const response = {
        accessToken,
        userData: { ...user, password: undefined }
      }

      return response;
    } else {
      error = {
        email: ['email or Password is Invalid']
      }

      return { error }
    }
  }

  const getLoginUser = (token: string) => {
    // ** Get token from header
    // @ts-ignore

    // ** Default response
    let response: LoginResponse = {}

    // ** Checks if the token is valid or expired
    jwt.verify(token, jwtConfig.secret as string, (err, decoded) => {
      // ** If token is expired
      if (err) {
        // ** If onTokenExpiration === 'logout' then send 401 error
        if (authConfig.onTokenExpiration === 'logout') {
          // ** 401 response will logout user from AuthContext file
          response = { error: { error: 'Invalid User' } }
        } else {
          // ** If onTokenExpiration === 'refreshToken' then generate the new token
          const oldTokenDecoded = jwt.decode(token, { complete: true })

          // ** Get user id from old token
          // @ts-ignore
          const { id: userId } = oldTokenDecoded.payload

          // ** Get user that matches id in token
          const user = users.find(u => u.id === userId)

          // ** Sign a new token
          const accessToken = jwt.sign({ id: userId }, jwtConfig.secret as string, {
            expiresIn: jwtConfig.expirationTime
          })

          // ** Set new token in localStorage
          window.localStorage.setItem(authConfig.storageTokenKeyName, accessToken)

          const obj = { userData: { ...user, password: undefined } }

          // ** return 200 with user data
          response = obj;
        }
      } else {
        // ** If token is valid do nothing
        // @ts-ignore
        const userId = decoded.id

        // ** Get user that matches id in token
        const userData = JSON.parse(JSON.stringify(users.find((u: UserDataType) => u.id === userId)))

        delete userData.password

        // ** return 200 with user data
        response = { userData }
      }
    })

    return response
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
