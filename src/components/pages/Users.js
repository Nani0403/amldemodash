import React from "react";
import "./Users.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import { AccordionActions } from "@mui/material";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));



function Users() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);

  };
 
  return (
   
    <Paper className="parent">
    
      <Card className="child" sx={{ maxWidth: 345, backgroundColor: "white"  }}> 
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTKDYiaV4orK8-II8iOLZLrKb6Vq50iWtUw&usqp=CAU"
            ></Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title="Pat Sam"
          subheader="Level 2 Anlayst"
        />

        {/* <CardActions disableSpacing>
        
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <ul class="nav">
                <li>
                  <a>Email</a>
                  <p class="title">xyz @gmail.com</p>
                </li>
                <li>
                  <a> Contcat</a>
                  <p class="title">88888888888</p>
                </li>
                <li>
                  <a>USer ID</a>
                  <p class="title">1000</p>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card className="child" sx={{ maxWidth: 345, backgroundColor: "white" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTKDYiaV4orK8-II8iOLZLrKb6Vq50iWtUw&usqp=CAU"
            ></Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title="Pat Sam"
          subheader="Level 2 Anlayst"
        />

        {/* <CardActions disableSpacing>
        
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <ul class="nav">
                <li>
                  <a>Email</a>
                  <p class="title">xyz @gmail.com</p>
                </li>
                <li>
                  <a> Contcat</a>
                  <p class="title">88888888888</p>
                </li>
                <li>
                  <a>USer ID</a>
                  <p class="title">1000</p>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className="child" sx={{ maxWidth: 345, backgroundColor: "white" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTKDYiaV4orK8-II8iOLZLrKb6Vq50iWtUw&usqp=CAU"
            ></Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title="Pat Sam"
          subheader="Level 2 Anlayst"
        />

        {/* <CardActions disableSpacing>
        
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <ul class="nav">
                <li>
                  <a>Email</a>
                  <p class="title">xyz @gmail.com</p>
                </li>
                <li>
                  <a> Contcat</a>
                  <p class="title">88888888888</p>
                </li>
                <li>
                  <a>USer ID</a>
                  <p class="title">1000</p>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className="child" sx={{ maxWidth: 345, backgroundColor: "white" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTKDYiaV4orK8-II8iOLZLrKb6Vq50iWtUw&usqp=CAU"
            ></Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title="Pat Sam"
          subheader="Level 2 Anlayst"
        />

        {/* <CardActions disableSpacing>
        
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <ul class="nav">
                <li>
                  <a>Email</a>
                  <p class="title">xyz @gmail.com</p>
                </li>
                <li>
                  <a> Contcat</a>
                  <p class="title">88888888888</p>
                </li>
                <li>
                  <a>USer ID</a>
                  <p class="title">1000</p>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className="child" sx={{ maxWidth: 345, backgroundColor: "white" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTKDYiaV4orK8-II8iOLZLrKb6Vq50iWtUw&usqp=CAU"
            ></Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title="Pat Sam"
          subheader="Level 2 Anlayst"
        />

        {/* <CardActions disableSpacing>
        
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <ul class="nav">
                <li>
                  <a>Email</a>
                  <p class="title">xyz @gmail.com</p>
                </li>
                <li>
                  <a> Contcat</a>
                  <p class="title">88888888888</p>
                </li>
                <li>
                  <a>USer ID</a>
                  <p class="title">1000</p>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className="child" sx={{ maxWidth: 345, backgroundColor: "white" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTKDYiaV4orK8-II8iOLZLrKb6Vq50iWtUw&usqp=CAU"
            ></Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title="Pat Sam"
          subheader="Level 2 Anlayst"
        />

        {/* <CardActions disableSpacing>
        
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <ul class="nav">
                <li>
                  <a>Email</a>
                  <p class="title">xyz @gmail.com</p>
                </li>
                <li>
                  <a> Contcat</a>
                  <p class="title">88888888888</p>
                </li>
                <li>
                  <a>USer ID</a>
                  <p class="title">1000</p>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className="child" sx={{ maxWidth: 345, backgroundColor: "white" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTKDYiaV4orK8-II8iOLZLrKb6Vq50iWtUw&usqp=CAU"
            ></Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
          title="Pat Sam"
          subheader="Level 2 Anlayst"
        />

        {/* <CardActions disableSpacing>
        
      </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <ul class="nav">
                <li>
                  <a>Email</a>
                  <p class="title">xyz @gmail.com</p>
                </li>
                <li>
                  <a> Contcat</a>
                  <p class="title">88888888888</p>
                </li>
                <li>
                  <a>USer ID</a>
                  <p class="title">1000</p>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Paper>
  );
}
export default Users;
