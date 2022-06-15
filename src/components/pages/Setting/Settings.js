import React, { useState } from "react";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import "../Setting/settings.css"
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { AvatarGroup } from "@mui/material";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import luffy from "../luffy.png";
import Alerts from "../Alerts";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Settings() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  return (
    <div
      style={{
        alignItems: "center",
        height: "100%",
        width: "1200px",
        marginTop: "3%",
      }}
    >
      <div style={{ backgroundColor: "white", marginTop: "10px" }}>
        <br />
        <br />
        <h1 style={{ marginRight: "875px" }}>Personal Info</h1>
        <h>
          We'll use the information below to provide updates about your account
          and other Hudl products. You can check our Privacy Policy for more
          information.
        </h>

        {/*--------------------------------Upper row--------------------------------  */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {/*--------------------------------Upper rowLeft Column-------------------------------- */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "100%",
              marginTop: "25px",
              flex: "1",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                height: "350px",
              }}
            >
              <div>
                <Avatar
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                    height: "200px",
                    flex: "1",
                    marginTop: "30px",
                    marginLeft: "20%",
                  }}
                  src={luffy}
                />
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    align: "center",
                    flex: "2",
                    marginTop: "30px",
                    marginLeft: "120px",
                    border: "1px solid grey",
                  }}
                >
                  Jatin Mangela
                </Button>
              </div>
            </div>
          </div>
          {/* --------------------------------Upper Row Right Column ----------------------------------------------------*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "100%",
              marginTop: "25px",
              flex: "2",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                height: "350px",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <span>First Name</span>
                  <input style={{ padding: "10px", width: "250px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                  }}
                >
                  <span>Last Name</span>
                  <input style={{ padding: "10px", width: "250px" }} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <span>Email</span>
                <input style={{ padding: "10px", width: "500px" }} />
                Whatever you enter here is also used to log in to Hudl.
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <span>Cell</span>
                  <input style={{ padding: "10px", width: "250px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                  }}
                >
                  <span>Cell Phone</span>
                  <input style={{ padding: "10px", width: "250px" }} />
                </div>
              </div>
              <h>
                Text updates available to U.S. customers with Gold package or
                higher. Standard messaging rates apply.
              </h>
            </div>
          </div>
        </div>
        <br />
        <div style={{ border: "1px solid gray" }}></div>
        {/*--------------------- Lower row----------------------- */}

        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <h1 style={{ marginRight: "875px" }}>Account Preferences</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "100%",
              width: "30%",
              marginTop: "25px",
              backgroundColor: "white",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  gap: "120px",
                  alignContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px",
                    marginRight: "45px",
                  }}
                >
                  <span>Language</span>
                  <div>
                    <FormControl sx={{ width: "250px" }}>
                      <Select defaultValue={0}>
                        <MenuItem value={10}>English</MenuItem>
                        <MenuItem value={20}>English United States</MenuItem>
                        <MenuItem value={30}>English united kingdom</MenuItem>
                        <MenuItem value={40}>German</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px",
                  }}
                >
                  <span>Timezone</span>
                  {/* <input style={{ padding: "5px", width: "250px" }} /> */}
                  <div>
                    <FormControl sx={{ width: "250px" }}>
                      <Select defaultValue={0}>
                        <MenuItem value={10}>English</MenuItem>
                        <MenuItem value={20}>English United States</MenuItem>
                        <MenuItem value={30}>English united kingdom</MenuItem>
                        <MenuItem value={40}>German</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              <h>Change Password</h>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    padding: "5px",
                  }}
                >
                  <span>Current Password</span>
                  <input
                    type="password"
                    style={{ padding: "5px", width: "250px", height: "50px" }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    padding: "5px",
                  }}
                >
                  <span>New Password</span>
                  <input
                    type="newpassword"
                    style={{ padding: "5px", width: "250px", height: "50px" }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    padding: "5px",
                  }}
                >
                  <span>Confirm New Password</span>
                  <input
                    type="Confirm"
                    style={{ padding: "5px", width: "250px", height: "50px" }}
               
                  />
                </div>
                
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  felxDirection: "column",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: "4%",
                  }}
                >
                  <button
                    type="reset"
                    value="Reset"
                    style={{ width: "100px", height: "40px" }}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: "15%",
                  }}
                >
                  <button
                    type="submit"
                    value="Submit"
                    style={{ width: "150px", height: "40px" }}
                  >
                    {" "}
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
