import { Textarea } from "@mui/joy";
import { Alert, FormControl, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Button from "../common/Button";

interface FormData {
  email: string;
  message: string;
}

export default function Form() {
  const [showAlert, setSowAlert] = useState<Boolean>(false);
  const [isError, setError] = useState<String>("success");
  const [errorMessage, setErrorMessage] = useState<String>(
    "your email has been send "
  );
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });
  function handelchange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  }
  function handelsubmit(e: React.MouseEvent<HTMLDivElement>) {
    const validate = /\b[a-zA-Z]+@\w+.\w/gi;
    setSowAlert(false);
    setError("");
    setErrorMessage("your email has been send ");
    if (formData.message === "" || formData.email === "") {
      setError("error");
      setErrorMessage("please make sure you fill the inputs");
    } else if (formData.email.match(validate)) {
      emailjs
        .send(
          "service_r2lm3zi",
          "template_hlrw9d9",
          { ...formData },
          "wKYFBtQHVDYnaiJtj"
        )
        .then((res) => {
          if (res.status === 200) {
            setSowAlert(true);
            setError("success");
            setFormData({ email: "", message: "" });
          } else {
            setSowAlert(true);
            setError("error");
            setErrorMessage("something went wrong please recheck your email");
          }
        })
        .catch((err) => {
          setSowAlert(true);
          setError("error");
          setErrorMessage(err.message);
        });
    }
  }
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full ">
      <div className="image-container max-w-lg w-1/2">
        <img
          src="./form-image.png"
          alt="person holding a laptop and he looks like a developer"
        />
      </div>
      <FormControl className="md:w-1/2 w-64 flex flex-col gap-12 justify-center max-w-xl">
        {showAlert && (
          <Alert severity={isError === "success" ? "success" : "error"}>
            {errorMessage}
          </Alert>
        )}
        <TextField
          variant="outlined"
          label="email"
          fullWidth
          className="textInput bg-white"
          color="success"
          name="email"
          onChange={handelchange}
          value={formData.email}
        />
        <Textarea
          color="success"
          minRows={5}
          size="lg"
          placeholder="type here :)"
          className="w-full"
          name="message"
          onChange={handelchange}
          value={formData.message}
        />
        <div className="button flex justify-end" onClick={handelsubmit}>
          <Button text={"submit"} />
        </div>
      </FormControl>
    </div>
  );
}
