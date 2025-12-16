import * as React from 'react';
// import SearchTab from './SearchInput';
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import { treeData } from '../../../data/MyTeamStaticData';
import { CustomNode } from './UserNode';
import Tree from "react-d3-tree";


export default function LevelTree() {
  const NODE_WIDTH = 300;

  const treeWidth = Math.max(
    1200,
    (treeData.children?.length || 1) * NODE_WIDTH
  );
  const containerRef = React.useRef(null);
  const [_, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);



  const buildTreeForView = (root) => ({
    ...root,
    children: root.children?.map((c) => ({
      ...c,
      children: [], //hide grandchildren
    })),
  });

  return (
    <div className='flex flex-col gap-7 w-full min-w-0 manrope-fontFamliy'>
      <Breadcrumb title={"Level Tree"} />
      <div className='w-full rounded-xl'>
        <div className="bg-white shadow-xl rounded-xl px-2 py-4 w-full">
          {/* Header */}
          <div className="flex justify-between mb-6">
            <div>
              <button className="ml-2 px-4 py-2 rounded bg-[#635BFF] text-white font-semibold">Team Network : <span>1153</span></button>
            </div>

            <div className="flex gap-5 justify-center items-center">
              <h1 className='text-lg font-semibold'>Team Status : </h1> <span className='bg-green-600 px-3 py-1 rounded font-semibold'> Active</span>
            </div>
          </div>

          {/* Parent Node */}
          <div className="relative w-full h-[380px] overflow-hidden">
            <div className="absolute inset-0 overflow-x-auto overflow-y-hidden">

              <div
                style={{
                  width: treeWidth,   // sirf yahan wide
                  height: 380,
                }}
              >

                <Tree
                  data={buildTreeForView(treeData)}
                  orientation="vertical"
                  pathFunc="elbow"
                  zoomable={false}
                  draggable={false}
                  panOnScroll={false}
                  zoomOnScroll={false}
                  separation={{ siblings: 2.3, nonSiblings: 2.6 }}
                  translate={{
                    x: treeWidth / 2,
                    y: 60,
                  }}
                  renderCustomNodeElement={(props) => (
                    <CustomNode {...props}  />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
