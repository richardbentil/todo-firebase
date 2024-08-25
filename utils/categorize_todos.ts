// Sample data

  
  // Function to convert Firestore timestamp to Date
  const firestoreTimestampToDate = (timestamp: any) => {
    const { seconds, nanoseconds } = timestamp;
    return new Date(seconds * 1000 + nanoseconds / 1000000);
  };
  
  // Function to get the start and end of the current week
  const getCurrentWeekRange = () => {
    const now = new Date();
    const start = new Date(now);
    start.setDate(now.getDate() - now.getDay()); // Set to the start of the week (Sunday)
  
    const end = new Date(start);
    end.setDate(start.getDate() + 6); // Set to the end of the week (Saturday)
  
    return { start, end };
  };
  
  // Function to get the start and end of today
  const getTodayRange = () => {
    const now = new Date();
    const start = new Date(now);
    start.setHours(0, 0, 0, 0); // Start of the day
  
    const end = new Date(now);
    end.setHours(23, 59, 59, 999); // End of the day
  
    return { start, end };
  };
  
  // Function to categorize todos
  export const categorizeTodos = (items: any[]) => {
    const { start: weekStart, end: weekEnd } = getCurrentWeekRange();
    const { start: todayStart, end: todayEnd } = getTodayRange();
  
    return items?.reduce((acc, item) => {
      const date = firestoreTimestampToDate(item.createdAt);
  
      if (date >= todayStart && date <= todayEnd) {
        if (!acc.today) {
          acc.today = [];
        }
        acc.today.push(item);
      } else if (date >= weekStart && date <= weekEnd) {
        if (!acc.thisWeek) {
          acc.thisWeek = [];
        }
        acc.thisWeek.push(item);
      } else {
        if (!acc.pastTodos) {
          acc.pastTodos = [];
        }
        acc.pastTodos.push(item);
      }
  
      return acc;
    }, {});
  };
  
  