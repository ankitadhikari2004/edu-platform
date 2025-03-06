import { WeekendRounded, PersonAddRounded, PersonRounded, AttachMoneyRounded, NotificationsActiveRounded } from '@mui/icons-material';

export const Dashboard = () => {

  const data = [
    {
      id: 1,
      label: "Total Products",
      icon: <WeekendRounded fontSize='large' />,
      bgcolor: "bg-neutral-900",
      balance: "44324",
      changes: "+55% than last week",
    },
    {
      id: 2,
      label: "New Users",
      icon: <PersonAddRounded fontSize='large' />,
      bgcolor: "bg-red-500",
      balance: "2434",
      changes: "+55% than last week",
    },
    {
      id: 3,
      label: "Total Users",
      icon: <PersonRounded fontSize='large' />,
      bgcolor: "bg-green-500",
      balance: "13253",
      changes: "+55% than last week",
    },
    {
      id: 4,
      label: "New Notifications",
      icon: <NotificationsActiveRounded fontSize='large' />,
      bgcolor: "bg-blue-500",
      balance: "12",
      changes: "+55% than last week",
    },
    {
      id: 5,
      label: "Total Revenew",
      icon: <AttachMoneyRounded fontSize='large' />,
      bgcolor: "bg-orange-500",
      balance: "$33k",
      changes: "+55% than last week",
    },
  ];

  return (
    <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-12">
      {
        data.map((item) => (
          <div key={item.id} className="flex flex-col items-stretch rounded-md bg-slate-900/10 p-4 w-[15em] border border-gray-900/10">
            <div className="pb-3 pt-2 relative">
              <div className={`flex items-center justify-center shadow-md rounded-lg w-16 h-16 absolute -top-8 left-0 ${item.bgcolor} text-neutral-200`}>
                {item.icon}
              </div>
              <div className="text-end pt-1">
                <p className="text-base font-medium text-end mb-0 capitalize text-slate-600">{item.label}</p>
                <h4 className="text-xl font-semibold tracking-wide">{item.balance}</h4>
              </div>
            </div>
            <hr className=" divide-solid border-slate-600/10" />
            <div className="pt-3">
              <p className="text-lg text-slate-700">{item.changes}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};
