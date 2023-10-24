export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  SYSTEM: '/system',
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
        link: '/system/user-doctor',
      },
      {
        name: 'menu.admin.manage-admin',
        link: '/system/user-admin',
      },
      {
        name: 'menu.admin.manage-doctor',
        link: '/system/user-doctor',
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
  SEND_TO_SERVER: 'DD/MM/YYYY',
};

export const YesNoObj = {
  YES: 'Y',
  NO: 'N',
};
