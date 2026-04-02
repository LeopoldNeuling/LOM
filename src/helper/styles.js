import { isMobile } from "./helperFunc";

export const horizontalSpaceBetweenFlex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const verticalFlex = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const navHeight = {
  height: "10vh",
};

export const canvasHeight = {
  minHeight: "90vh",
};

export const NavItemMargin = {
  marginLeft: "10px",
};

export const pageStyle = {
  height: "800px",
  width: "100%",
  scrollMarginTop: "10vh",
};

export const firstPageMarginTop = {
  marginTop: !isMobile() ? "10vh" : 0,
};

export const mobileProgressBarStyle = { position: "sticky", top: 0 };
