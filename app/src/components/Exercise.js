import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

const images = [
  {
    url: 'https://i.imgur.com/myfAfEz.jpg',
    title: 'Military Press',
    width: '50%',
    path: '/military-press'
  },
  {
    url: 'https://i.imgur.com/KVXmuMe.jpg',
    title: 'Dead Lift',
    width: '50%',
    path: '/dead-lift'
  },
  {
    url: 'https://i.imgur.com/OI0EBha.jpg',
    title: 'Bench Press',
    width: '50%',
    path: '/bench-press'
  },
  {
    url: 'https://i.imgur.com/k9qddQM.jpg',
    title: 'Squat',
    width: '50%',
    path: '/squat'
  }
];

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          path: '/military-press'
        },
        {
          path: '/dead-lift'
        },
        {
          path: '/bench-press'
        },
        {
          path: '/squat'
        }
      ],
      lifts: this.props.lifts
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {images.map(image => (
          <Link
            to={this.state.links.find(link => link.path === image.path).path}
          >
            <ButtonBase
              focusRipple
              key={image.path}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subheading"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </Link>
        ))}
      </div>
    );
  }
}

Exercise.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Exercise);
