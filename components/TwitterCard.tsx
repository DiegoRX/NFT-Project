import React from "react";

import BigNumber from "bignumber.js/bignumber";
import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";

import useI18n from "hooks/useI18n";

const StyledTwitterCard = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TwitterCard = () => {
  const TranslateString = useI18n();

  return (
    <StyledTwitterCard>
      <div>
        <h2>{TranslateString(10003, "Announcements")}</h2>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "SHARKTECHNOLOG2",
          }}
          options={{
            height: "300",
            chrome: "noheader, nofooter",
            width: "400",
          }}
        />
      </div>
    </StyledTwitterCard>
  );
};

export default TwitterCard;
