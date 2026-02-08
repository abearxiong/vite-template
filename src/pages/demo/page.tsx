import { useDemoStore } from './store/index'
export const App = () => {
  const demoStore = useDemoStore()
  console.log('demo', demoStore.formData)
  return <div>App</div>
}

export default App;