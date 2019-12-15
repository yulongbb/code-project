export class User {
    id: number; // ID
    username: string; // 名称
    password: string; // 描述
    nickname: string; // 姓名
    type: string; // 类型
    parent: User; // 父帐号
    children: User[]; // 子账号
}
  