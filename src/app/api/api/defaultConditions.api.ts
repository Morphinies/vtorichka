interface IdefaultValues {
  filters: {
    name: string;
    value: {
      name: string;
      value: boolean;
    }[];
  }[];
  sorting: {
    name: string;
    value: string;
  };
  category: {
    name: string;
    value: string;
  };
  search: string;
}
const defaultValues: IdefaultValues = {
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
  search: "",
};

const fetchAll = (): Promise<IdefaultValues> =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(defaultValues);
    }, 100);
  });

const defaultConditions = { fetchAll };

export default defaultConditions;
