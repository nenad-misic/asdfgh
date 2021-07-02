from flask import Flask, request, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')


@app.route('/')
def send_index():
    return send_from_directory('public', 'components/index/index.html')

@app.route('/product')
def send_product():
    return send_from_directory('public', 'components/product/product.html')

@app.route('/shop')
def send_shop():
    return send_from_directory('public', 'components/shop/shop.html')

@app.route('/order')
def send_order():
    return send_from_directory('public', 'components/order/order.html')

@app.route('/notfound')
def send_404():
    return send_from_directory('public', 'components/notfound/notfound.html')

@app.route('/static/<path:path>')
def send(path):
    return send_from_directory('public', path)

if __name__ == "__main__":
    app.run()