const port = 8001;
export async function fetchHotTopics() {
  return await fetch(`http://localhost:${port}/api/topics/hot.json`).then(res => res.json());
}

export async function fetchTopicDetail(id) {
  const datas = await fetch(`http://localhost:${port}/api/topics/${id}`).then(res => res.json());
  return datas[0];
}
