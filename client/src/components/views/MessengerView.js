import { Card, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { getConversations } from "../../api/messages";
import { isLoggedIn } from "../../helpers/authHelper";
import { useLocation } from "react-router-dom";

const MessengerView = () => {
  const [conservant, setConservant] = useState(null);
  const [width, setWindowWidth] = useState(0);
  const mobile = width < 800;
  const user = isLoggedIn();
  const { state } = useLocation();
  const newConservant = state && state.user;

  const getConversation = (conversations, conservantId) => {
    return conversations.find(conversation => conversation.recipient._id === conservantId);
  };

  useEffect(() => {
    const fetchConversations = async () => {
      let conversations = await getConversations(user);
      if (newConservant) {
        setConservant(newConservant);
        if (!getConversation(conversations, newConservant._id)) {
          const newConversation = {
            _id: newConservant._id,
            recipient: newConservant,
            new: true,
            messages: [],
          };
          conversations = [newConversation, ...conversations];
        }
      }
    };

    fetchConversations();
  }, [user, newConservant]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container>
      <Navbar />
      <Box>
        <Card sx={{ padding: 0 }}>
          <Grid
            container
            sx={{ height: "calc(100vh - 110px)" }}
            alignItems="stretch"
          >
            {!mobile ? (
              <>
                <Grid
                  item
                  xs={5}
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    height: "100%",
                  }}
                >
                  {/* Replace with your new component or content */}
                  {/* <UserMessengerEntries /> */}
                </Grid>

                <Grid item xs={7} sx={{ height: "100%" }}>
                  {/* Replace with your new component or content */}
                  {/* <Messages /> */}
                </Grid>
              </>
            ) : !conservant ? (
              <Grid
                item
                xs={12}
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  height: "100%",
                }}
              >
                {/* Replace with your new component or content */}
                {/* <UserMessengerEntries /> */}
                <Box sx={{ display: "none" }}>
                  {/* Replace with your new component or content */}
                  {/* <Messages /> */}
                </Box>
              </Grid>
            ) : (
              <Grid item xs={12} sx={{ height: "100%" }}>
                {/* Replace with your new component or content */}
                {/* <Messages /> */}
              </Grid>
            )}
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default MessengerView;
