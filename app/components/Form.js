import React, {
  useState,
  useEffect
} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField
} from "@material-ui/core";
import {
  useSelector,
  useDispatch
} from "react-redux";
import {
  ButtonASelected,
  ButtonBSelected,
  ButtonCSelected,
  ButtonDSelected
} from "../redux/actions";

function Form() {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  return (
    <>
      <div className="checkbox">
        <div className="checkbox-grid">
          <div className="inline-grid">
            <FormControlLabel
              control={
                <Checkbox
                  name="ButtonA"
                  checked={data.ButtonA}
                  onChange={() =>
                    dispatch(ButtonASelected())
                  }
                  inputProps={{
                    "aria-label":
                      "primary checkbox"
                  }}
                />
              }
              label="Button A"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="ButtonB"
                  checked={data.ButtonB}
                  onChange={() =>
                    dispatch(ButtonBSelected())
                  }
                  inputProps={{
                    "aria-label":
                      "primary checkbox"
                  }}
                />
              }
              label="Button B"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="ButtonC"
                  checked={data.ButtonC}
                  onChange={() =>
                    dispatch(ButtonCSelected())
                  }
                  inputProps={{
                    "aria-label":
                      "primary checkbox"
                  }}
                />
              }
              label="Button C"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="ButtonD"
                  checked={data.ButtonD}
                  onChange={() =>
                    dispatch(ButtonDSelected())
                  }
                  inputProps={{
                    "aria-label":
                      "primary checkbox"
                  }}
                />
              }
              label="Button D"
            />
          </div>
        </div>
        <div className="submit-button">
          <Link
            to="/results"
            className="formbutton"
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Form;
