import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        // src="http://localhost:4001/assets/info4.jpg"
        src="../assets/tech.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>TechSpace</Typography>
        <Typography color={medium}>TechSpace.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
       Diving into the world of Tech and much more.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
