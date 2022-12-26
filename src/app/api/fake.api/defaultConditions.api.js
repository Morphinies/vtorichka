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
    value: "дате (c новых)",
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
