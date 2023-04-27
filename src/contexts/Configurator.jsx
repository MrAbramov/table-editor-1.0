import { createContext, useContext, useState } from "react";
import img from '../assets/img/default-texture.png';
import defaultConfig from '../assets/data/default-config.json';

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [tableColor, setTableColor] = useState("#0000ff");
  const [tablePicture, setTablePicture] = useState(img)

  const [tableWidth, setTableWidth] = useState(200);
  const [tableHeight, setTableHeight] = useState(100);
  const [tableDepth, setTableDepth] = useState(10);

  const [repeatTablePictureX, setRepeatTablePictureX] = useState(1);
  const [repeatTablePictureY, setRepeatTablePictureY] = useState(1);

  const [legs, setLegs] = useState(4);
  const [legsColor, setLegsColor] = useState("#0000ff");
  const [legsPicture, setLegsPicture] = useState(img);

  const [legsWidth, setLegsWidth] = useState(10);
  const [legsHeight, setLegsHeight] = useState(80);

  const [repeatLegsPictureX, setRepeatLegsPictureX] = useState(1);
  const [repeatLegsPictureY, setRepeatLegsPictureY] = useState(1);

  const [takeScreenshot, setTakeScreenshot] = useState(false);

  const initData = async (data) => {
    if (!data) data = defaultConfig;

    const {
      tableColor,
      tableWidth,
      tableHeight,
      tableDepth,
      repeatTablePictureX,
      repeatTablePictureY,
      legs,
      legsColor,
      legsWidth,
      legsHeight,
      repeatLegsPictureX,
      repeatLegsPictureY,
      tablePicture,
      legsPicture,

    } = data;

    setTableColor(tableColor)
    setTableWidth(tableWidth)
    setTableHeight(tableHeight)
    setTableDepth(tableDepth)
    setRepeatTablePictureX(repeatTablePictureX)
    setRepeatTablePictureY(repeatTablePictureY)
    setLegs(legs)
    setLegsColor(legsColor)
    setLegsWidth(legsWidth)
    setLegsHeight(legsHeight)
    setRepeatLegsPictureX(repeatLegsPictureX)
    setRepeatLegsPictureY(repeatLegsPictureY)

    setTablePicture(tablePicture)
    setLegsPicture(legsPicture)

  }

  return (
    <ConfiguratorContext.Provider
      value={{
        tableWidth,
        setTableWidth,
        tableHeight,
        setTableHeight,
        tableDepth,
        setTableDepth,

        tableColor,
        setTableColor,

        tablePicture,
        setTablePicture,

        repeatTablePictureX,
        setRepeatTablePictureX,

        repeatTablePictureY,
        setRepeatTablePictureY,

        legsWidth,
        setLegsWidth,
        legsHeight,
        setLegsHeight,

        legs,
        setLegs,
        legsColor,
        setLegsColor,

        legsPicture,
        setLegsPicture,

        repeatLegsPictureX,
        setRepeatLegsPictureX,

        repeatLegsPictureY,
        setRepeatLegsPictureY,

        initData,

        takeScreenshot,
        setTakeScreenshot
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
