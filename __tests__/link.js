import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../src/components/link'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot()

  tree.props.onMouseLeave()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('test return promise', () => Promise.resolve(1000).then(v => expect(v).toBe(1000)))

test('test async/await', async () => {
  const v = await Promise.resolve(1000);
  expect(v).toBe(1000)
})

describe('testing global variables', () => {
  beforeAll(() => console.log('starting test'))
  beforeAll(() => console.log('finishing test'))
  let a = 100;
  beforeEach(() => a += 1);
  afterEach(() => a -= 1);

  test('test1', () => expect(a).toBe(101))
  test('test2', () => Promise.resolve(1000).then(v => expect(a).toBe(101)))
  test('test3', async () => {
    await Promise.resolve(1000);
    a += 100;
    expect(a).toBe(201)
  })
})
