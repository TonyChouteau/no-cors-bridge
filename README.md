# **no-cors-bridge**
A NodeJS server to pass through CORS with Axios server side (XMLHttpRequest)

# **Already online**

## **How to use it**

Make a request on : http://vps.tonychouteau.fr/bridge/<request\>

Exemple : http://vps.tonychouteau.fr/bridge/https://jsonplaceholder.typicode.com/todos/1

Only GET works for now.

## **Use**

### **Before**

```javascript
fetch("https://api.namefake.com/french-france/random")
.then(res => res.json())
.then(data => {
	console.log(data);
});
```

![Cross-Origin Error](https://raw.githubusercontent.com/TonyChouteau/no-cors-bridge/master/NotOK.png)

### **Now**

```javascript
fetch("http://vps.tonychouteau.fr/bridge/https://api.namefake.com/french-france/random")
.then(res => res.json())
.then(data => {
	console.log(data);
});
```

![It works !](https://raw.githubusercontent.com/TonyChouteau/no-cors-bridge/master/OK.png)
