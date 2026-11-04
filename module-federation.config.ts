export const mfConfig = {
  name: "mf_colorpicker",
  filename: "remoteEntry.js",
  exposes: {
    "./ColorPicker": "./src/components/ColorPicker.tsx",
    "./useColors": "./src/hooks/useColors.ts",
  },
  shared: ["react", "react-dom"],
};
