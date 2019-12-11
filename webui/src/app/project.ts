export class Project {
    id: number; // ID
    name: string; // 名称
    description: string; // 描述
    createDate: Date; // 创建时间
    updateDate: Date; // 更新时间
    children: Project[]; // 子项目
  }
  