import * as React from 'react';
import { ReferralData } from '../../../data/MyTeamStaticData';
// import SearchTab from './SearchInput';
import Breadcrumb from "../../Breadcrumb";
import { treeData } from '../../../data/MyTeamStaticData';
import { CustomNode } from './UserNode';
import Tree from "react-d3-tree";
import { UserChildrenPanel } from './UserChildrenPanel';


export default function LevelTree() {

    const [selectedUser, setSelectedUser] = React.useState(null);
    const handleNodeClick = (node) => {
        if (node.children) {
            // example: focus logic / load children
            console.log("Load children of:", node.name);
        }
    };

    const handleAvatarClick = (node) => {
        setSelectedUser(node);
    };


    const buildTreeForView = (root) => ({
        ...root,
        children: root.children?.map((c) => ({
            ...c,
            children: [], //  hide grandchildren
        })),
    });

    return (
        <>
            <Breadcrumb title={"Downline"} />
            {/* <SearchTab onSearch={handleSearch} /> */}
            <div className='w-full overflow-hidden rounded-xl   ' >
                <div className='bg-white shadow-xl rounded-xl px-2 py-4 '
                //  sx={{ width: '100%', mb: 2, boxShadow:2 }}
                >

                    {/* Header */}
                    <div className="flex justify-between mb-6 ">
                        <div>
                            <input className="px-4 py-2 rounded bg-yellow-600 text-black" placeholder="Search UID" />
                            <button className="ml-2 px-4 py-2 rounded bg-blue-600">Search</button>
                        </div>

                        <div className="bg-green-600 px-3 py-1 rounded font-semibold">
                            Active
                        </div>
                    </div>

                    {/* Parent Node */}
                    <div className="w-full h-[380px] overflow-x-auto overflow-y-hidden bg-transparent">
                        <div style={{ width: "2200px", height: "380px",}} className='border'>

                            <Tree
                                data={buildTreeForView(treeData)}
                                orientation="vertical"
                                pathFunc="elbow"

                                /*  LOCK TREE */
                                zoomable={false}
                                draggable={false}
                                panOnScroll={false}
                                zoomOnScroll={false}

                                separation={{ siblings: 2.3, nonSiblings: 2.6 }}

                                translate={{
                                    x: 1100, // canvasWidth / 2
                                    y: 60,
                                }}

                                renderCustomNodeElement={(props) => (
                                    <CustomNode {...props} onAvatarClick={handleAvatarClick} />
                                )}
                            />

                            {/* ✅ CHILD DETAILS PANEL (YAHI ADD HOGA) */}
                            {selectedUser && (
                                <UserChildrenPanel
                                    user={selectedUser}
                                    onClose={() => setSelectedUser(null)}
                                />
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
