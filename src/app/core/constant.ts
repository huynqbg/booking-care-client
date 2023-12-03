export const USER_ROLE = {
    ADMIN: 'R1',
    DOCTOR: 'R2',
    PATIENT: 'R3',
};

export const adminMenu = [
    {
        // quản lý người dùng
        name: 'menu.admin.user',
        menus: [
            {
                name: 'menu.admin.manage-user',
                link: '/system/admin/manage-user',
            },
            {
                name: 'menu.admin.manage-doctor',
                link: '/system/admin/manage-doctor',
            },
            {
                // Quản lý kế hoạch khám bệnh của Bác sĩ
                name: 'menu.doctor.manage-schedule',
                link: '/system/doctor/manage-schedule',
            },
        ],
    },
    {
        // quản lý phong kham
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic',
                link: '/system/admin/manage-clinic',
            },
        ],
    },
    {
        // quản lý chuyen khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty',
                link: '/system/admin/manage-specialty',
            },
        ],
    },
    {
        // quản lý handbook
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage-handbook',
                link: '/system/admin/manage-handbook',
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
                link: '/system/doctor/manage-schedule',
            },

            // Quản lý bệnh nhân của Bác sĩ
            {
                name: 'menu.doctor.manage-patient',
                link: '/system/doctor/manage-patient',
            },
        ],
    },
];

export const LANGUAGES = {
    VI: 'vi',
    EN: 'en',
};

export const dateFormat = {
    dateVN: 'dd/MM/yyyy',
};
