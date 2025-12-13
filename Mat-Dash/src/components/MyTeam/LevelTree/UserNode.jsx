export const CustomNode = ({ nodeDatum, onAvatarClick }) => {
  const isActive = nodeDatum.attributes?.status === "Active";

  return (
    <g style={{
        // backgroundColor:'blue'
    }}>
      {/*  AVATAR (CLICKABLE) */}
      <g
        onClick={() => onAvatarClick(nodeDatum)}
        style={{ cursor: "pointer", backgroundColor:"blue" }}
      >
        <circle
          r="38"
          fill="#fff"
          stroke={isActive ? "#16a34a" : "#dc2626"}
          strokeWidth="2"
        />
        <image
          href="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          x="-32"
          y="-32"
          width="65"
          height="65"
        />
      </g>

      {/*  ID BADGE */}
      <g>
        {/* BADGE BACKGROUND */}
        <rect
          x="-65"          // width / 2
          y="45"
          rx="8"
          ry="8"
          width="130"      //  increased width
          height="40"      //  increased height
          fill={isActive ? "#15803d" : "#b91c1c"}
        />

        {/*  CENTERED TEXT */}
        <text
          x="0"                            //  horizontal center
          y="65"                           //  y + height/2
          textAnchor="middle"              //  horizontal centering
          dominantBaseline="middle"        //  vertical centering
          fill="#ffffff"                   //  pure white
          fontSize="20"
          fontWeight="700"
          pointerEvents="none"             //  hover only on rect
        >
          {nodeDatum.name}
        </text>

        {/*  TOOLTIP (only for id badge) */}
        <title >
          Team: {nodeDatum.attributes?.team}
          {"\n"}Self Business: {nodeDatum.attributes?.selfBusiness}
          {"\n"}Team Business: {nodeDatum.attributes?.teamBusiness}
          {"\n"}Status: {nodeDatum.attributes?.status}
        </title>
      </g>
    </g>
  );
};
