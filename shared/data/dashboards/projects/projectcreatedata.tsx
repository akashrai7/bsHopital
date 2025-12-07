interface Select {
    value: string;
    label: string;
  }

  export const StatusSelect: Select[] = [
    { value: "Completed", label: 'Completed' },
    { value: "Inprogress", label: 'Inprogress' },
    { value: "On-hold", label: 'On-hold' },
  ];

  export const AsignSelect: Select[] = [
    { value: "Angelina May", label: 'Angelina May' },
    { value: "Kiara advain", label: 'Kiara advain' },
    { value: "Hercules Jhon", label: 'Hercules Jhon' },
    { value: "Mayor Kim", label: 'Mayor Kim' },
    { value: "Alexa Biss", label: 'Alexa Biss' },
    { value: "Karley Dia", label: 'Karley Dia' },
    { value: "Kim Jong", label: 'Kim Jong' },
    { value: "Darren Sami", label: 'Darren Sami' },
  ];
  export const PrioritySelect: Select[] = [
    { value: "High", label: 'High' },
    { value: "Medium", label: 'Medium' },
    { value: "Low", label: 'Low' },
  ];