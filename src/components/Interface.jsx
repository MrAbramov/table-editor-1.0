import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  OutlinedInput,
  Radio,
  RadioGroup,
  Slider,
  Stack,
} from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";

export const Interface = () => {
  const {
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

    initData
  } = useConfigurator();

  function readFileDataAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  }

  const importData = (e, control) => {
    switch (control) {
      case 'reset': initData();
        break;
      default:
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          initData(JSON.parse(e.target.result));
        };
    }
  };

  const exportData = () => {
    const data = {
      tableWidth,
      tableHeight,
      tableDepth,
      tableColor,
      repeatTablePictureX,
      repeatTablePictureY,
      legsWidth,
      legsHeight,
      legs,
      legsColor,
      repeatLegsPictureX,
      repeatLegsPictureY,
      tablePicture,
      legsPicture,
    };

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        overflowY: 'auto',
        maxHeight: '94vh',
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Table Width</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableWidth}
              onChange={(e) => setTableWidth(e.target.value)}
              valueLabelDisplay="auto"
            />

            <FormLabel>Table Height</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableHeight}
              onChange={(e) => setTableHeight(e.target.value)}
              valueLabelDisplay="auto"
            />

            <FormLabel>Table Depth</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={5}
              max={50}
              value={tableDepth}
              onChange={(e) => setTableDepth(e.target.value)}
              valueLabelDisplay="auto"
            />

            <FormLabel>Table Color</FormLabel>
            <OutlinedInput type="color" value={tableColor} onChange={(e) => setTableColor(e.target.value)} />

            <FormLabel>Table Load Picture</FormLabel>
            <input type="file" name="file1" onChange={async (e) => e.target.value && setTablePicture(await readFileDataAsBase64(e.target.files[0]))} />

            <FormLabel>Repeat Picture</FormLabel>
            <Box sx={{ display: 'flex', gap: 5, }}>
              <label>
                X: <Input inputProps={{ min: 1, max: 100 }} sx={{ display: 'inline-block', width: '50px' }} type="number" placeholder="X:" variant="outlined" onChange={(e) => setRepeatTablePictureX(e.target.value)} value={repeatTablePictureX} />
              </label>

              <label>
                Y: <Input inputProps={{ min: 1, max: 100 }} sx={{ display: 'inline-block', width: '50px' }} type="number" placeholder="Y:" variant="outlined" onChange={(e) => setRepeatTablePictureY(e.target.value)} value={repeatTablePictureY} />
              </label>
            </Box>
          </FormControl>
        </Box>

        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Width</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={5}
              max={20}
              value={legsWidth}
              onChange={(e) => setLegsWidth(e.target.value)}
              valueLabelDisplay="auto"
            />

            <FormLabel>Legs Height</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={legsHeight}
              onChange={(e) => setLegsHeight(e.target.value)}
              valueLabelDisplay="auto"
            />

            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={4}
                control={<Radio />}
                label="Standard"
              />

              <FormControlLabel
                value={100}
                control={<Radio />}
                label="Round"
              />
            </RadioGroup>

            <FormLabel>Legs Color</FormLabel>
            <OutlinedInput type="color" value={legsColor} onChange={(e) => setLegsColor(e.target.value)} />

            <FormLabel>Legs Load Picture</FormLabel>
            <input type="file" name="file1" onChange={async (e) => e.target.value && setLegsPicture(await readFileDataAsBase64(e.target.files[0]))} />

            <FormLabel>Repeat Picture</FormLabel>
            <Box sx={{ display: 'flex', gap: 5, }}>
              <label>
                X: <Input inputProps={{ min: 1, max: 100 }} sx={{ display: 'inline-block', width: '50px' }} type="number" placeholder="X:" variant="outlined" onChange={(e) => setRepeatLegsPictureX(e.target.value)} value={repeatLegsPictureX} />
              </label>

              <label>
                Y: <Input inputProps={{ min: 1, max: 100 }} sx={{ display: 'inline-block', width: '50px' }} type="number" placeholder="Y:" variant="outlined" onChange={(e) => setRepeatLegsPictureY(e.target.value)} value={repeatLegsPictureY} />
              </label>
            </Box>
          </FormControl>
        </Box>

        <Box className="glass" p={3}>
          <FormControl>
            <input type="file" onChange={(e) => importData(e)} />

            <Button variant="contained" type="button" onClick={exportData}>
              Export Data
            </Button>

            <Button variant="contained" type="button" onClick={(e) => importData(e, 'reset')}>
              Reset Data
            </Button>
          </FormControl>
        </Box>
      </Stack>
    </Box >
  );
};
