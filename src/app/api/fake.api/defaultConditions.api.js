const defaultValues = {
  filters: [
    {
      name: "тип",
      value: [
        { name: "б/у", value: true },
        { name: "новое", value: true },
      ],
    },
  ],
  sorting: {
    name: "сортировка",
    value: "по дате",
  },
  category: { name: "категория", value: "" },
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(defaultValues);
    }, 500);
  });

const defaultConditions = { fetchAll };

export default defaultConditions;
