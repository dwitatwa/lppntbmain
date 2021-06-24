import React from "react";
import HeaderForm from "../../components/HeaderForm";
import s from "./form.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Form() {
  return (
    <div>
      <HeaderForm />
      <div className={s.main}>
        <div className={s.background}></div>
        <div className={s.container}>
          <div className={s.title}>
            <h1>Form Testing</h1>
          </div>
          <div className={s.form} style={{ marginBottom: "10px" }}>
            <TextField
              id="standard-full-width"
              label="Nama Lengkap"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={s.form} style={{ marginBottom: "10px" }}>
            <TextField
              id="standard-full-width"
              label="No HP/WA"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={s.form} style={{ marginBottom: "10px" }}>
            <TextField
              id="standard-full-width"
              label="Asal Daerah"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={s.form} style={{ marginBottom: "10px" }}>
            <TextField
              id="standard-full-width"
              label="Alamat Lengkap"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={s.button}>
            <Button variant="contained" color="default" disableElevation>
              Cancel
            </Button>
            <Button variant="contained" color="primary" disableElevation>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
