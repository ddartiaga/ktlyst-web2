import { SideMenu } from "./NavMenu";

export const menuItems: SideMenu = {
  categories: [
    {
      id: "dashboard",
      label: "Dashboard",
      subcategory: [
        {
          id: "home-page",
          label: "Dashboard",
          new: false,
          path: "/dashboard",
          count: 0,
          icon: "bi bi-bar-chart",
          items: [
            
          ]
        }
      ]
    },
    {
      id: "sales-mgmt",
      label: "Sales Management",
      subcategory: [
        {
          id: "sales-leads",
          label: "Bids",
          new: false,
          path: "/bids",
          count: 0,
          icon: "bi bi-megaphone",
          items: []
        },
        {
          id: "sales-tasks",
          label: "Tasks",
          new: false,
          path: "/tasks/my-tasks",
          count: 0,
          icon: "ri ri-list-check-3",
          items: []
        }
      ]
    },
    {
      id: "asset-mgmt",
      label: "Asset Management",
      subcategory: [
        {
          id: "assets",
          label: "Assets",
          new: false,
          path: "/tasks/dashboard",
          count: 0,
          icon: "bi bi-motherboard",
          items: []
        },
      ]
    },
    {
      id: "help",
      label: "HELP",
      subcategory: [
        {
          id: "need-help",
          label: "Need Help?",
          new: false,
          path: "/need-help",
          count: 0,
          icon: "bi bi-patch-question",
          items: []
        }
      ]
    }
  ]
};
