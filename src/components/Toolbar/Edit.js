import React, { Component } from 'react';
import { AddWrapper, SettingsWrapper, FieldGroup, FieldCustomLabel } from '../../styledComponents/Shapes.ui';
import { SaveCancelWrapper } from '../../styledComponents/Common.ui';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiButton from '@material-ui/core/Button';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiTypography from '@material-ui/core/Typography';
import MuiIconButton from '@material-ui/core/IconButton';
import { EDIT_TOOLS } from '../../config';
import MuiSlider from '@material-ui/core/Slider';
import Icon from '../icon/Icon';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import MuiTextField from '@material-ui/core/TextField';
import SaveCancelBox from './SaveCancelBox';
import '../custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MuiInputBase from '@material-ui/core/InputBase';
// or
// import { MuiInputBase } from '@material-ui/core';

const InputBase = withStyles({
  input: {
    height: 'auto',
    fontSize: '12px'
  }
})(MuiInputBase);

const Select = withStyles({
  root: {
    height: 'auto',
    fontSize: '12px',
    color: '#a1a1a1',
    fontFamily: 'Poppins',
    paddingLeft: '10px',
    border: '1px solid #353535'
  }
})(MuiSelect);

const Slider = withStyles({
  root: {
    color: '#0075ff',
    padding: 0,
    height: '4px'
  } 
})(MuiSlider)

const TextField = withStyles({
  root: {
    
  }
})(MuiTextField);

const Button = withStyles({
  root: {
    textTransform: 'capitalize',
    '&:hover': {
      
    }
  },
  label: {
    fontSize: '12px',
    lineHeight: '18px',
    fontFamily: 'Poppins'
  }
})(MuiButton);

const IconButton = withStyles({
  root: {
    padding: '5px 10px',
    '&:hover': {
      color: 'white'
    }
  },

  label: {
    color: '#a1a1a1',
    '&:hover': {
      color: 'white'
    }
  }
})(MuiIconButton);

const Accordion = withStyles({
  root: {
    backgroundColor: '#333333',
    color: '#a1a1a1',
    boxShadow: 'none',
    borderRadius: '5px',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
      backgroundColor: '#222',
      color: 'white'
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    marginBottom: -1,
    padding: '0 10px',
    minHeight: 0,
    '&$expanded': {
    minHeight: 0,
    },
  },
  content: {
    padding: '10px 0',
    margin: 0,
    '&$expanded': {
      margin: 0
    },
    '&>i': {
      marginRight: '8px'
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: '5px 10px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '13px',
    color: '#a1a1a1'
  },
}))(MuiAccordionDetails);

const Typography = withStyles({
  body1: {
    fontSize: '12px',
    lineHeight: '20px',
    fontFamily: 'Poppins'
  }
})(MuiTypography);

const useStyles = makeStyles({
  root: {

  },
  cancelBtn: {
    color: '#f34e3a'
  },
  saveBtn: {
    color: '#3a88fe'
  }
})


export default function Edit(props) {

  const { config } = props;
  const {cropPresets} = config
  // console.log("confgi : ", config);
  const [expanded, setExpanded] = React.useState('');
  const [strengthVal, setStrengthVal] = React.useState(0);
  const [brightVal, setBrightVal] = React.useState(0);
  const [contrastVal, setContrastVal] = React.useState(0);
  const [hightlightVal, setHightlightVal] = React.useState(0);
  const [shadowVal, setShadowVal] = React.useState(0);

  const [hueVal, setHueVal] = React.useState(0);
  const [temperatureVal, setTemperatureVal] = React.useState(0);
  const [saturationVal, setSaturationVal] = React.useState(0);

  const [sharpVal, setSharpVal] = React.useState(0);

  const [eraseVal, setEraseVal] = React.useState(0);

  const [restoreVal, setRestoreVal] = React.useState(0);

  const handleChange = (panel) =>(event, newExpanded) => {
     setExpanded(newExpanded ? panel : false);
  };
  const editOptions = EDIT_TOOLS;

  const classes = useStyles();

  const handleStrengthSliderChange = (event, newValue) => {
      // setValue(newValue);
      setStrengthVal(newValue)

      // props.onRotate(0, parseFloat(newValue), flipX, flipY);
  }

  const handleBrightSliderChange = (event, newValue) => {
    setBrightVal(newValue)
  }

  const handleHighlightsSliderChange = (event, newValue) => {
    setHightlightVal(newValue)
  }

  const handleContrastSliderChange = (event, newValue) => {
    setContrastVal(newValue)
  }

  const handleShadowSliderChange = (event, newValue) => {
    setShadowVal(newValue)
  }

  const handleTemperatureSliderChange = (event, newValue) => {
    setTemperatureVal(newValue)
  }

  const handleHueSliderChange = (event, newValue) => {
    setHueVal(newValue)
  }

  const handleSaturationSliderChange = (event, newValue) => {
    setSaturationVal(newValue)
  }

  const handleSharpnessSliderChange = (event, newValue) => {
    setSharpVal(newValue)
  }

  const handleEraseSliderChange = (event, newValue) => {
    setBrushVal(newValue)
  }

  const handleRestoreSliderChange = (event, newValue) => {
    setRestoreVal(newValue)
  }

  return (
    <div className="">
      <Accordion square expanded={expanded === 'crop'} onChange={handleChange('crop')}>
        <AccordionSummary aria-controls="crop-content" id="crop-header">
          <Icon name="crop" /><Typography>Crop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl style={{width: '100%', marginBottom: '15px'}}>
            <Select native variant="outlined" defaultValue="" id="grouped-native-select">

              {cropPresets.map((obj, index) =>
                <option value={index} key={index}>{obj.name}</option>
              )}

            </Select>
          </FormControl>
          
          <div className="d-flex">
            <TextField
              className="mr-3"
              id="input-number"
              label="Width(Px)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="input-number"
              label="Height(Px)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <SaveCancelWrapper>
            <SaveCancelBox />
          </SaveCancelWrapper>

        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'rotate'} onChange={handleChange('rotate')}>
        <AccordionSummary aria-controls="rotate-content" id="rotate-header">
          <Icon name="rotate-cw" /><Typography>Rotate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="d-flex">
            <IconButton className="pl-0"><Icon name="rotate-ccw" /></IconButton>
            <IconButton><Icon name="rotate-cw" /></IconButton>
            <IconButton><Icon name="swap_horizontal_circle" /></IconButton>
            <IconButton><Icon name="swap_vertical_circle" /></IconButton>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span>Strength</span>
            <div className="d-flex">
              <IconButton className="p-0" onClick={()=>setStrengthVal(strengthVal-1)}><Icon name="minus" /></IconButton>
              <IconButton className="p-0" onClick={()=>setStrengthVal(strengthVal+1)}><Icon name="plus" /></IconButton>
              <span className="ml-3">{strengthVal}<sup className="ml-1">&#9900;</sup></span>
            </div>
          </div>
          <div className="px-1 pb-3">
            <Slider
              value={strengthVal}
              onChange={handleStrengthSliderChange}
              aria-label="input strength value"
              defaultValue={0}
              step={1}
              min={-90}
              max={90}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'exposure'} onChange={handleChange('exposure')}>
        <AccordionSummary aria-controls="exposure-content" id="exposure-header">
          <Icon name="exposure" /><Typography>Exposure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span>Brightness</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setBrightVal(brightVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setBrightVal(brightVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{brightVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                value={brightVal}
                  onChange={handleBrightSliderChange}
                  aria-label="input brightness value"
                  defaultValue={50}
                  step={1}
                  min={0}
                  max={100}
                />
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span>Contrast</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setContrastVal(contrastVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setContrastVal(contrastVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{contrastVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                value={contrastVal}
                onChange={handleContrastSliderChange}
                aria-label="input contrast value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span>Highlights</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setHightlightVal(hightlightVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setHightlightVal(hightlightVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{hightlightVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                value={hightlightVal}
                onChange={handleHighlightsSliderChange}
                aria-label="input highlights value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span>Shadows</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setShadowVal(shadowVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setShadowVal(shadowVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{strengthVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                value={shadowVal}
                onChange={handleShadowSliderChange}
                aria-label="input shadow value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>

          <SaveCancelWrapper>
            <SaveCancelBox />
          </SaveCancelWrapper>

        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'saturation'} onChange={handleChange('saturation')}>
        <AccordionSummary aria-controls="saturation-content" id="saturation-header">
          <Icon name="format_color_fill" /><Typography>Color Saturation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span>Hue</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setHueVal(hueVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setHueVal(hueVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{hueVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                value={hueVal}
                onChange={handleHueSliderChange}
                aria-label="input hue value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span>Saturation</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setSaturationVal(saturationVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setSaturationVal(saturationVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{saturationVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                value={saturationVal}
                onChange={handleSaturationSliderChange}
                aria-label="input saturation value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span>Temperature</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setTemperatureVal(temperatureVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setTemperatureVal(temperatureVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{temperatureVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                value={temperatureVal}
                onChange={handleTemperatureSliderChange}
                aria-label="input saturation value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>

          <SaveCancelWrapper>
            <SaveCancelBox />
          </SaveCancelWrapper>

        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'sharpen'} onChange={handleChange('sharpen')}>
        <AccordionSummary aria-controls="sharpen-content" id="sharpen-header">
          <Icon name="sun1" /><Typography>Sharpen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span>Sharpness</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setSharpVal(sharpVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setSharpVal(sharpVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{sharpVal}<sup className="ml-1">&#9900;</sup></span>
              </div>
            </div>
            <div className="px-1 pb-3">
              <Slider
                value={sharpVal}
                onChange={handleSharpnessSliderChange}
                aria-label="input hue value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>
          
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'erase'} onChange={handleChange('erase')}>
        <AccordionSummary aria-controls="erase-content" id="erase-header">
          <Icon name="eraser" /><Typography>Erase</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-left">
            <Typography>Brush Shape</Typography>
            <div className="">
              <IconButton><Icon name="radio-unchecked" /></IconButton>
              <IconButton><Icon name="checkbox-unchecked" /></IconButton>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span>Brush Size</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setEraseVal(eraseVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setEraseVal(eraseVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{eraseVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1 pb-3">
              <Slider
                value={eraseVal}
                onChange={handleEraseSliderChange}
                aria-label="input hue value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>
          
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'restore'} onChange={handleChange('restore')}>
        <AccordionSummary aria-controls="restore-content" id="restore-header">
          <Icon name="history" /><Typography>Restore</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-left">
            <Typography>Brush Shape</Typography>
            <div className="">
              <IconButton><Icon name="radio-unchecked" /></IconButton>
              <IconButton><Icon name="checkbox-unchecked" /></IconButton>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span>Brush Size</span>
              <div className="d-flex">
                <IconButton className="p-0" onClick={()=>setRestoreVal(restoreVal-1)}><Icon name="minus" /></IconButton>
                <IconButton className="p-0" onClick={()=>setRestoreVal(restoreVal+1)}><Icon name="plus" /></IconButton>
                <span className="ml-3">{restoreVal}&#x00025;</span>
              </div>
            </div>
            <div className="px-1 pb-3">
              <Slider
                value={restoreVal}
                onChange={handleRestoreSliderChange}
                aria-label="input hue value"
                defaultValue={50}
                step={1}
                min={0}
                max={100}
              />
            </div>
          </div>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );

}