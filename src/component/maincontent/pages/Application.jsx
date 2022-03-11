import React from "react";


function Application() {

    var heading = ['Name', 'City', 'Course'];
        var body =
            [['Kapil', 'Jaipur', 'MCA'],
            ['Aakash', 'Hisar', 'Btech'],
            ['Mani', 'Ranchi', 'MSc'],
            ['Yash', 'Udaipur', 'Mtech']
            ];

  return (
    <div className="bg-gray-300 ml-2 mr-6 rounded w-12/12 ">
      <div className="flex flex-row justify-between">
        <p className="ml-3 p-2 mt-2 text-gray-700 text-sm">
          21 Total Candidates
        </p>
        <div className="ml-12 flex flex-row">
          <div className="h-8 mt-2 ">
            <input
              type="text"
              className="bg-gray-300 border-2 rounded border-gray-600"
              placeholder="What are you looking for?"
            />
          </div>

          <button className="ml-5 mt-2 h-7 text-sm text-white rounded hover:scale-105 bg-blue-900  w-44">
            Mark all as read{" "}
          </button>
          <button className="ml-5 mt-2 h-7 mr-2 text-sm text-white rounded hover:scale-105 bg-red-500  w-44">
            Add candidates
          </button>
        </div>
      </div>
      <div className="border-b-2 border-gray-400 mt-1 ml-4 mr-4">
        {" "}
        <hr />{" "}
      </div>

  <div className="bg-gray-100 rounded-md m-8 w-4/5 h-full">
  
  <Table heading={heading} body={body} />

  </div>
    </div>
  );
}


const Table = (props) => {
    var Heading = props.heading
    var Body = props.body

    return (
        <table style={{ width: 500 }} >
            <thead>
                <tr className="p-5">
                    {Heading.map(head => <th>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                {Body.map(row => <TableRow row={row} />)}
            </tbody>
        </table>
    );

}

const TableRow = (props) => {
    var row = props.row;
        return (
            <tr >
                {row.map(val => <td>{val}</td>)}
            </tr>
            );}


export default Application;
