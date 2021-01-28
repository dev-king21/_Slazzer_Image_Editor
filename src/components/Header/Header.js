import React, { Component } from 'react';
import {
  HeaderWrapper, HeaderTop, Title, ButtonsWrapper, ToolbarWrapper, CancelBtn, CloseBtn, LogoImgWrapper, SelectScreenWrapper
} from '../../styledComponents';
import { Toolbar } from '../';
import { RESOLUTIONS } from '../../config';
import MuiButton from '@material-ui/core/Button';
import Icon from '../icon/Icon';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



export default class extends Component {

  state = {
    resolution: ''
  }

  render() {
    const {
      activeTab, onRevert, apply, onClose, processWithCloudService, processWithFilerobot,
      handleSave, t, config
    } = this.props;

    const { resolution } = this.state
    const applyAndSave = () => { apply(handleSave); };

    const resolutions = RESOLUTIONS;

    const Button = withStyles({
      root: {
        fontSize: '12px',
        textTransform: 'capitalize',
        fontFamily: 'Poppins',
        padding: '5px 10px'
      },
      startIcon: {
        marginRight: '4px',
        '&>i': {
          fontSize: '15px!important'
        }
      },
      outlined: {
        border: '1px solid #a1a1a1'
      }
    })(MuiButton)


    const handleChange = (event) => {
      this.setState({
        resolution: event.target.value
      })

    };

    return (
      <HeaderWrapper>
        <HeaderTop>
          <LogoImgWrapper>
            <a href="#"><img src="assets/images/white-logo.png"></img></a>
          </LogoImgWrapper>
          <SelectScreenWrapper>
            <span>Popular Format</span>
            <div>
              {/* <FormControl>
                <NativeSelect
                  value={resolution}
                  onChange={handleChange}
                  name="age"
                  inputProps={{ 'aria-label': 'age' }}
                >

                  {resolutions.map((obj, index) => {
                    <option key={obj} value={obj}>{obj}</option>

                  })}
                </NativeSelect>

              </FormControl> */}
            </div>
          </SelectScreenWrapper>
          <ButtonsWrapper>
            <Button
              className="text-white mr-3"
              variant="outlined"
              onClick={() => { }}
            >
              Change API Key
            </Button>
            <Button
              variant="contained"
              className="bg-danger text-white"
              style={{ border: '1px solid #dc3545' }}
              startIcon={<Icon name="upload" />}
              onClick={() => { }}
            >
              Upload Image
            </Button>
          </ButtonsWrapper>
          {/* <ButtonsWrapper>
            <CancelBtn
              hide={!activeTab}
              onClick={isOneTool ? cancelBtnClosingFn : onRevert}
              noCapitalStrs={noCapitalStrs}
              sm default fullSize
            >
              {t[`toolbar.cancel`]}
            </CancelBtn>
            <Button
              themeColor
              sm
              success={!activeTab || activeTab === 'resize'}
              themeBtn={activeTab}
              onClick={isOneTool ? applyAndSave : !activeTab ? () => { handleSave(); } : () => { apply(); }}
            >
              {!activeTab || activeTab === 'resize' ? onFinishButtonLabel : t['toolbar.apply']}
            </Button>
          </ButtonsWrapper> */}

        </HeaderTop>
      </HeaderWrapper>
    )
  }
}