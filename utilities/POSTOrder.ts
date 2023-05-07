import axios from "axios";

async function POSTOrder(order, id) {
  console.error(order);
  const { data } = await axios.put(
    "http://10.0.0.9:5000/users/" + id,

    {
      headers: {
        "Content-Type": "application/json",
      },
      data: order,
    }
  );

  return data;
}

//curl http://localhost:5000/users/ --include

export default POSTOrder;
