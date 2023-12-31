// import Form from "@/Components/ui/Form/Form";
import React from "react";
import { Suspense } from "react";
import Loading from "../Loading";
const Form = React.lazy(() => import('@/Components/ui/Form/Form'));

const Register = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Form type="Register" />
      </Suspense>
    </div>
  );
};

export default Register;
