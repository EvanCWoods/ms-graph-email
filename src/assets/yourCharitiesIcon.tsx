
interface IProps {
    hover: boolean;
}

const YourCharitiesIcon: React.FC<IProps> = ({ hover }) => {
    return (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EA580C"
          d="M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
        />
        <path
          fill="#EA580C"
          d="M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
        />
      </svg>
    );
}

export default YourCharitiesIcon;