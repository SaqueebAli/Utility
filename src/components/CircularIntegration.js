import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveIcon from "@mui/icons-material/Save";
import { withThemeCreator } from "@material-ui/styles";

export default function CircularIntegration(props) {
  // const [loading, setLoading] = React.useState(false);
  // const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(props.success && {
      bgcolor: "white",
      "&:hover": {
        bgcolor: "white"
      },
      
    }),
    width:"20px",
      height:"20px",
      minHeight:"0",
      boxShadow:"none",
      
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  // const handleButtonClick = () => {
  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     timer.current = window.setTimeout(() => {
  //       setSuccess(true);
  //       setLoading(false);
  //     }, 2000);
  //   }
  // };

  return (
    
    <Box sx={{ position: "relative", left: "202px", top: "-40px" }}>
        <Fab
          aria-label="save"
          // size="small"
          // color="transparent"
          sx={buttonSx}
          // onClick={handleButtonClick}
          style={props.success?{backgroundColor:"white"}:{backgroundColor:"transparent"}}
        >
          {props.success ? <CheckCircleIcon sx={{color:"#24a0ed"}}  /> : ""}
        </Fab>
        {props.loading && (
          <CircularProgress
            size={23}
            sx={{
              color: green[500],
              position: "absolute",
              top: -0.5,
              left: -2,
              zIndex: 1
            }}
          />
        )}
</Box>     
   
  );
}
