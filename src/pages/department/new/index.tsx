import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import {
  DepartmentSchema,
  IDepartment,
} from "../../../schema/department.schema";
import { trpc } from "../../../utils/trpc";

const initialValues: IDepartment = {
  name: "",
  alias: "",
  description: "",
};

const CreateDepartmentPage = () => {
  const utils = trpc.useContext();
  const mutation = trpc.department.add.useMutation({
    async onSuccess() {
      await utils.department.list.invalidate();
    },
  });
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full max-w-xs">
        <h1>Create Department</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(DepartmentSchema)}
          onSubmit={(
            values: IDepartment,
            { setSubmitting }: FormikHelpers<IDepartment>
          ) => {
            mutation.mutate(values);
            setSubmitting(false);
          }}
        >
          <Form className="form-control w-full max-w-xs">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <Field
              className="input input-bordered w-full max-w-xs"
              id="name"
              name="name"
              autoComplete={"off"}
            />
            <label className="label">
              <span className="label-text-alt">
                <ErrorMessage
                  name="name"
                  component="div"
                  className="field-error"
                />
              </span>
            </label>

            <label className="label" htmlFor="alias">
              <span className="label-text">Alias</span>
            </label>
            <Field
              className="input input-bordered w-full max-w-xs"
              id="alias"
              name="alias"
              autoComplete={"off"}
            />
            <label className="label">
              <span className="label-text-alt">
                <ErrorMessage
                  name="alias"
                  component="div"
                  className="field-error"
                />
              </span>
            </label>

            <label className="label" htmlFor="description">
              <span className="label-text">Description</span>
            </label>
            <Field
              className="input input-bordered w-full max-w-xs"
              id="description"
              name="description"
              type="text"
              autoComplete={"off"}
            />
            <label className="label">
              <span className="label-text-alt">
                <ErrorMessage
                  name="description"
                  component="div"
                  className="field-error"
                />
              </span>
            </label>

            <button className="btn mt-4" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default CreateDepartmentPage;
