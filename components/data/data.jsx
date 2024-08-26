export const data = {
  categories: [
    {
      id: "category-1",
      title: "CSPM Dashboard",
      widgets: [
        {
          id: "widget-1",
          title: "Cloud Accounts",
          type: "pie",
          graph: {
            total: 4,
            categories: [
              {
                status: "Connected",
                count: 2,
                color: "cyan"
              },
              {
                status: "Not Connected",
                count: 2,
                color: "gray"
              }
            ]
          }
        },
        {
          id: "widget-2",
          title: "Cloud Account Risk Assessment",
          type: "pie",
          graph: {
            total: 9659,
            categories: [
              {
                status: "Failed",
                count: 1689,
                color: "#DC3545"
              },
              {
                status: "Warning",
                count: 681,
                color: "#FFC107"
              },
              {
                status: "Not Available",
                count: 36,
                color: "#E5E7EB"
              },
              {
                status: "Passed",
                count: 7253,
                color: "#28A745"
              }
            ]
          }
        }
      ]
    },
    {
      id: "category-2",
      title: "CWPP Dashboard",
      widgets: [
        {
          id: "widget-3",
          title: "Top 5 Namespace Specific Alerts",
          type: "nothing",
          graph: {
            data: "No Graph Data Available"
          }
        },
        {
          id: "widget-4",
          title: "Workload Alerts",
          type: "nothing",
          graph: {
            data: "No Graph Data Available"
          }
        }
      ]
    },
    {
      id: "category-3",
      title: "Registry Scan",
      widgets: [
        {
          id: "widget-5",
          title: "Image Risk Assessment",
          type: "bar",
          graph: {
            total: 1470,
            categories: [
              {
                status: "Critical",
                count: 9,
                color: "#DC3545"
              },
              {
                status: "High",
                count: 150,
                color: "#FFC107"
              },
              {
                status: "Medium",
                count: 313,
                color: "#17A2B8"
              },
              {
                status: "Low",
                count: 998,
                color: "#E5E7EB"
              }
            ]
          }
        },
        {
          id: "widget-6",
          title: "Image Security Issues",
          type: "bar",
          graph: {
            total: 4,
            categories: [
              {
                status: "Critical",
                count: 2,
                color: "#DC3545"
              },
              {
                status: "High",
                count: 2,
                color: "#FFC107"
              },
              {
                status: "Medium",
                count: 0,
                color: "#17A2B8"
              },
              {
                status: "Low",
                count: 0,
                color: "#E5E7EB"
              }
            ]
          }
        }
      ]
    }
  ],
}
