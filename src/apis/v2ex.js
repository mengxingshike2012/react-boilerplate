const port = 8001;
// eslint: no-return-await
// async functions are always wrapped by Promise.resolve
export async function fetchHotTopics() {
  return fetch(`http://localhost:${port}/api/topics/hot.json`).then(res => res.json());
}

export async function fetchTopicDetail(id) {
  const datas = await fetch(`http://localhost:${port}/api/topics/${id}`).then(res => res.json());
  return datas[0];
}
