// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
    return [
        {
            title: 'Dashboard',
            icon: 'tabler:smart-home',
            path: '/dashboard'
        },
        {
            sectionTitle: 'Task Management'
        },
        {
            title: 'Task',
            icon: 'tabler:brand-asana',
            children: [
                {
                    title: 'My Task',
                    icon: 'tabler:layout-kanban',
                    path: '/task/mytask'
                },
                {
                    title: 'Assigned Task',
                    icon: 'tabler:list-details',
                    path: '/task/assignedtask'
                },
            ]
        },
        {
            sectionTitle: 'Admin Section'
        },
        {
            title: 'Admin',
            icon: 'tabler:brand-appstore',
            children: [
                {
                    title: 'Permissions',
                    icon: "tabler:brand-pinterest",
                    children: [
                        {
                            title: 'Group',
                            path: '/admin/permissions/groups'
                        },
                        {
                            title: 'User',
                            path: '/admin/permissions/users'
                        },
                    ]
                },
                {
                    title: 'Representative',
                    icon: "tabler:users",
                    children: [
                        {
                            title: 'Representative',
                            path: '/admin/representatives'
                        },
                        {
                            title: 'Indicator',
                            path: '/admin/representatives/indicators'
                        },
                        {
                            title: 'KPI',
                            path: '/admin/representatives/kpi'
                        },
                    ]
                },
                {
                    title: 'Network',
                    icon: 'tabler:brand-notion',
                    children: [
                        {
                            title: 'Occupation',
                            path: '/admin/networks/occupations'
                        },
                        {
                            title: 'Group',
                            path: '/admin/networks/groups'
                        },
                        {
                            title: 'Interest',
                            path: '/admin/networks/interests'
                        },
                        {
                            title: 'Pipe Line Stage',
                            path: '/admin/networks/pipe-line-stages'
                        },
                        {
                            title: 'Vendor Required Document',
                            path: '/admin/networks/vendor-required-documents'
                        }
                    ]
                },
                {
                    title: 'Customer',
                    icon: 'tabler:copyright',
                    children: [
                        {
                            title: 'Branch Cost',
                            path: '/admin/customers/branch-costs'
                        },
                        {
                            title: 'Department',
                            path: '/admin/customers/departments'
                        },
                        {
                            title: 'Role',
                            path: '/admin/customers/roles'
                        },
                        {
                            title: 'Province',
                            path: '/admin/customers/provinces'
                        },
                        {
                            title: 'Branch',
                            path: '/admin/customers/branches'
                        },
                        {
                            title: 'Building',
                            path: '/admin/customers/buildings'
                        },
                        {
                            title: 'Service',
                            path: '/admin/customers/services'
                        },
                        {
                            title: 'Status',
                            path: '/admin/customers/statuses'
                        },
                        {
                            title: 'Document Type',
                            path: '/admin/customers/document-types'
                        },
                        {
                            title: 'Task Type',
                            path: '/admin/customers/task-types'
                        },
                        {
                            title: 'Lead Source',
                            path: '/admin/customers/lead-sources'
                        },
                        {
                            title: 'Warranty Type',
                            path: '/admin/customers/warranty-types'
                        }
                    ]
                },
                {
                    title: 'Estimate',
                    icon: 'tabler:truck-delivery',
                    children: [
                        {
                            title: 'Insurance Company',
                            path: '/admin/estimates/insurance-company'
                        },
                        {
                            title: 'Charge Code',
                            path: '/admin/estimates/charge-code'
                        },
                        {
                            title: 'Kit',
                            path: '/admin/estimates/kit'
                        },
                        {
                            title: 'Equipment',
                            path: '/admin/estimates/equipment'
                        },
                        {
                            title: 'Loss Estimate Reason',
                            path: '/admin/estimates/loss-estimate-reasons'
                        }
                    ]
                },
                {
                    title: 'Work Order',
                    children: [
                        {
                            title: 'Work Order',
                            path: '/admin/work-orders'
                        },
                        {
                            title: 'Recommendation',
                            path: '/admin/work-orders/recommendations'
                        }
                    ]
                },
                {
                    title: 'PO Reason',
                    children: [
                        {
                            title: 'PO Reason',
                            path: '/admin/po-reasons'
                        }
                    ]
                },
                {
                    title: 'Finance',
                    icon: 'tabler:brand-foursquare',
                    children: [
                        {
                            title: 'Collection Status',
                            path: '/admin/finance/collection-status'
                        },
                        {
                            title: 'Collection Responsibility',
                            path: '/admin/finance/collection-responsibilities'
                        },
                        {
                            title: 'Sync QBO Modules',
                            path: '/admin/finance/sync-quickbooks-modules'
                        }
                    ]
                },
                {
                    title: 'Marketing Cost',
                    children: [
                        {
                            title: 'Marketing Cost',
                            path: '/admin/marketing-costs'
                        }
                    ]
                },
                {
                    title: 'Management',
                    icon: 'tabler:brand-gmail',
                    children: [
                        {
                            title: 'Target Type',
                            path: '/admin/management/target-types'
                        },
                        {
                            title: 'Target Setting',
                            path: '/admin/management/target-settings'
                        }
                    ]
                },
                {
                    title: 'Terminology',
                    children: [
                        {
                            title: 'Terminology',
                            path: '/admin/terminologies'
                        }
                    ]
                },
                {
                    title: 'Email',
                    icon: "tabler:mail",
                    children: [
                        {
                            title: 'Email Template',
                            path: '/admin/email/email-templates'
                        },
                        {
                            title: 'Signature',
                            path: '/admin/email/signature'
                        },
                        {
                            title: 'Attachment',
                            path: '/admin/email/attachments'
                        }
                    ]
                },
            ]
        },
        {
            sectionTitle: 'Main Sections'
        },
        {
            title: 'Network',
            icon: 'tabler:brand-notion',
            children: [
                {
                    title: 'Add',
                    icon: 'tabler:plus',
                    path: '/networks/create'
                },
                {
                    title: 'List',
                    icon: 'tabler:list',
                    path: '/networks'
                },
            ]
        },
        {
            title: 'Vendor',
            icon: 'tabler:brand-vimeo',
            children: [
                {
                    title: 'List',
                    icon: 'tabler:list',
                    path: '/vendors'
                },
            ]
        },
        {
            title: 'Management',
            icon: 'tabler:brand-gmail',
            children: [
                {
                    title: 'Activity Report',
                    path: '/management/activity-report'
                },
                {
                    title: 'Service Report',
                    path: '/management/service-report'
                },
                {
                    title: 'Budget Vs Actual',
                    path: '/management/budget-vs-actual'
                },
                {
                    title: 'Estimate Cost',
                    path: '/management/estimate-cost'
                },
                {
                    title: 'Estimate Spotlight',
                    path: '/management/estimate-spotlights'
                },
                {
                    title: 'Notebook',
                    path: '/management/notebooks'
                },
                {
                    title: 'Task Compliance',
                    path: '/management/task-compliances'
                },
            ]
        },
        {
            title: 'Customer',
            icon: 'tabler:copyright',
            children: [
                {
                    title: 'Add',
                    icon: 'tabler:plus',
                    path: '/customers/create'
                },
                {
                    title: 'List',
                    icon: 'tabler:list',
                    path: '/customers'
                },
                {
                    title: 'Call Logs',
                    icon: "tabler:phone",
                    path: '/customers/logs'
                },
                {
                    title: 'Warranty List',
                    path: '/customers/warranty'
                },
                {
                    title: 'Documents',
                    icon: 'tabler:files',
                    path: '/customers/documents'
                }
            ]
        },
        {
            title: 'Estimate',
            icon: 'tabler:truck-delivery',
            children: [
                {
                    title: 'List',
                    icon: 'tabler:list',
                    path: '/estimates'
                },
                {
                    title: 'Work In Progress',
                    icon: 'plus',
                    path: '/estimates/workinprogress'
                },
                {
                    title: 'Excel',
                    icon: 'tabler:file-text',
                    path: '/estimates/excel/'
                },
                {
                    title: 'Opened',
                    path: '/estimates/opened'
                },
                {
                    title: 'Lost',
                    path: '/estimates/lost'
                },
                {
                    title: 'Month Completion Value',
                    path: '/estimates/monthcompletionvalue'
                },
                {
                    title: 'Excel Logs',
                    icon: "tabler:phone",
                    path: '/estimates/excellog'
                },
                {
                    title: 'PO',
                    path: '/estimates/po'
                },
                {
                    title: 'WO',
                    path: '/estimates/wo'
                }
            ]
        },
        {
            title: 'Scheduler',
            icon: 'tabler:calendar',
            children: [
                {
                    title: 'Calendar',
                    icon: 'tabler:calendar-event',
                    path: '/scheduler/calendar'
                },
                {
                    title: 'Post Jobs',
                    icon: 'plus',
                    path: '/scheduler/postjobs'
                },
            ]
        },
        {
            sectionTitle: 'Report Section'
        },
        {
            title: 'Finance',
            icon: 'tabler:brand-foursquare',
            children: [
                {
                    title: 'Finance',
                    icon: 'tabler:brand-foursquare',
                    path: '/finance'
                },
                {
                    title: 'Cash Flow Reports',
                    path: '/finance/cashflow'
                },
                {
                    title: 'Deleted Invoice',
                    path: '/finance/deletedinvoice'
                },
                {
                    title: 'Deleted Estimate',
                    path: '/finance/deletedestimates'
                },
                {
                    title: 'Avg Collection Report',
                    path: '/finance/averagecollection'
                },
                {
                    title: 'Vendor Documents',
                    path: '/finance/vendordocuments'
                },
                {
                    title: 'Untrack QBO Customers',
                    path: '/finance/untrackquickbook'
                },
                {
                    title: 'Quickbook Reports',
                    path: '/finance/quickbookreports'
                }
            ]
        },
        {
            title: 'Report',
            icon: 'tabler:brand-asana',
            children: [
                {
                    title: 'Report',
                    path: '/report'
                },
                {
                    title: 'Call Tracking',
                    path: '/report/calltracking'
                },
            ]
        },
        {
            title: 'Terminology',
            icon: 'tabler:brand-square',
            children: [
                {
                    title: 'Terminology',
                    path: '/terminology'
                }
            ]
        },
    ]
}

export default navigation
