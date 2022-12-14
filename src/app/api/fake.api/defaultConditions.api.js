const defaultValues = {
  filters: [
    {
      name: "тип",
      value: [
        { name: "новое", value: true },
        { name: "б/у", value: true },
      ],
    },
  ],
  sorting: {
    name: "сортировка",
    value: "c новых",
  },
  category: { name: "", value: "" },
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(defaultValues);
    }, 500);
  });

const defaultConditions = { fetchAll };

export default defaultConditions;
