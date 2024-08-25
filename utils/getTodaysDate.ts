// Function to get today's date in the desired format
export const getFormattedDate = () => {
    const today = new Date();
    
    // Options for formatting date
    const options: any = { 
      weekday: 'long', // Full weekday name (e.g., "Sunday")
      day: 'numeric',  // Day of the month (e.g., "25")
      month: 'long'     // Full month name (e.g., "August")
    };
  
    // Format the date using Intl.DateTimeFormat
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const formattedDate = formatter.format(today);
    
    // Add suffix to day (e.g., "25th")
    const day: any = today.getDate();
    const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
                   (day % 10 === 2 && day !== 12) ? 'nd' :
                   (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
    
    return `${formattedDate.replace(day, `${day}${suffix}`)}`;
  };
  
  // Get today's formatted date
  const todaysDate = getFormattedDate();
  console.log(todaysDate); // Output: "Sunday, 25th August"
  