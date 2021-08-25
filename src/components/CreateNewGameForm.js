import React from "react";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function getSteps() {
  return ["Buy-In Amount", "Select Players"];
}

const CreateNewGameForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const config = [
    {
      stepContent: () => (
        <TextField
          label="Buy-in"
          fullWidth
          error={false}
          value={50}
          onChange={(e) => {}}
          name="buyIn"
          type="number"
          required
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
        />
      ),
    },
    {
      stepContent: () => <div>sssss</div>,
    },
  ];

  return (
    <div className="container w-full h-full">
      <p className="w-full text-xl text-gray-400 mb-5 text-center">New Game</p>
      <div className="h-full">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <div className="flex flex-col space-y-4">
                  <div>{config[index].stepContent()}</div>
                  <div>
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          // <Paper square elevation={0}>
          //   <Button onClick={handleReset}>Reset</Button>
          // </Paper>
          <div className="flex justify-around mt-4">
            <div className="w-5/12 ">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<DoneIcon />}
                fullWidth
              >
                START GAME
              </Button>
            </div>
            <div className="w-5/12">
              <Button fullWidth size="medium" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNewGameForm;
