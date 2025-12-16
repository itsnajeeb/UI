export const CustomNode = ({ nodeDatum, onAvatarClick }) => {
  const isActive = nodeDatum.attributes?.status === "Active";

  return (
    <g>
      {/* AVATAR (CLICKABLE ONLY) */}
      <g
        onClick={(e) => {
          e.stopPropagation();
          onAvatarClick(nodeDatum);
        }}
        style={{ cursor: "pointer" }}
      >
        {/* Invisible hit area */}
        <rect
          x="-40"
          y="-40"
          // width="80"
          // height="80"
          fill="transparent"
        />

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

      {/* ID BADGE (NOT CLICKABLE) */}
      <g pointerEvents="none">
        <rect
          x="-65"
          y="45"
          rx="8"
          ry="8"
          width="130"
          height="40"
          fill={isActive ? "#15803d" : "#b91c1c"}
        />

        <text
          x="0"
          y="65"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#ffffff"
          fontSize="20"
          fontWeight="700"
        >
          {nodeDatum.name}
        </text>

        <title>
          Team: {nodeDatum.attributes?.team}
          {"\n"}Self Business: {nodeDatum.attributes?.selfBusiness}
          {"\n"}Team Business: {nodeDatum.attributes?.teamBusiness}
          {"\n"}Status: {nodeDatum.attributes?.status}
        </title>
      </g>
    </g>
  );
};
