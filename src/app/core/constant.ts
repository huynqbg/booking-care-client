export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    LOG_OUT: '/logout',
    SYSTEM: '/system',
};

export const USER_ROLE = {
    ADMIN: 'R1',
    DOCTOR: 'R2',
    PATIENT: 'R3',
};

export const adminMenu = [
    {
        // quản lý người dùng
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud',
                link: '/system/user-manage',
            },
            {
                name: 'menu.admin.crud-redux',
                link: '/system/user-redux',
            },
            {
                name: 'menu.admin.manage-doctor',
                link: '/system/manage-doctor',
            },
            // {
            //     name: 'menu.admin.manage-admin',
            //     link: '/system/user-admin',
            // },
            {
                // Quản lý kế hoạch khám bệnh của Bác sĩ
                name: 'menu.doctor.manage-schedule',
                link: '/doctor/manage-schedule',
            },
        ],
    },
    {
        // quản lý phong kham
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic',
                link: '/system/manage-clinic',
            },
        ],
    },
    {
        // quản lý chuyen khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty',
                link: '/system/manage-specialty',
            },
        ],
    },
    {
        // quản lý handbook
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage-handbook',
                link: '/system/manage-handbook',
            },
        ],
    },
];

export const doctorMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [
            // Quản lý kế hoạch khám bệnh của Bác sĩ
            {
                name: 'menu.doctor.manage-schedule',
                link: '/doctor/manage-schedule',
            },

            // Quản lý bệnh nhân của Bác sĩ
            {
                name: 'menu.doctor.manage-patient',
                link: '/doctor/manage-patient',
            },
        ],
    },
];

export const LANGUAGES = {
    VI: 'vi',
    EN: 'en',
};

export const manageActions = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
};

export const dateFormat = {
    dateVN: 'dd/MM/yyyy',
};

export const YesNoObj = {
    YES: 'Y',
    NO: 'N',
};
