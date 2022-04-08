import { TreeItem } from "./TreeItem";

export const TreeData: TreeItem[] = [
    { Id: 1, Title: "Item A", Level: 0 },
    { Id: 4, Title: "Item A1", ParentId: 1, Level: 1 },
    { Id: 5, Title: "Item A2", ParentId: 1, Level: 1 },
    { Id: 10, Title: "Item A2a", ParentId: 5, Level: 2 },
    { Id: 11, Title: "Item A2b", ParentId: 5, Level: 2 },
    { Id: 12, Title: "Item A2c", ParentId: 5, Level: 2 },

    { Id: 13, Title: "Item A2c1", ParentId: 12, Level: 3 },
    { Id: 14, Title: "Item A2c2", ParentId: 12, Level: 3 },
    { Id: 15, Title: "Item A2c3", ParentId: 12, Level: 3 },

    { Id: 2, Title: "Item B", Level: 0 },
    { Id: 6, Title: "Item B1", ParentId: 2, Level: 1 },
    { Id: 7, Title: "Item B2", ParentId: 2, Level: 1 },
    { Id: 8, Title: "Item B3", ParentId: 2, Level: 1 },

    { Id: 3, Title: "Item C", Level: 0 },
    { Id: 9, Title: "Item C1", ParentId: 3, Level: 1 },

];