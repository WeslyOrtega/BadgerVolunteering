import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNodes, getOptions } from "../features/tree/treeSlice";
function NodeEdit() {
  const dispatch = useDispatch();
  const { nodes, options, isLoading } = useSelector((state) => state.tree);
  useEffect(() => {
    dispatch(getNodes());
    dispatch(getOptions());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {nodes &&
        nodes.map((node, index) => (
          <div key={index}>
            {!node.isFinal && (
              <>
                <h1 className="text-2xl">Node #{index}</h1>
                <h1>{node.name}</h1>
                {/* <p>{options.filter(opt => opt._id === node.option1_obj).map(e=><h1>{e.text}</h1>)}</p>
                <p>{options.filter(opt => opt._id === node.option2_obj).map(e=><h1>{e.text}</h1>)}</p> */}
              </>
            )}
          </div>
        ))}
    </>
  );
}

export default NodeEdit;
