source "https://rubygems.org"

ruby "3.2.2"

# use latest version for engine-yard
gem 'bundler', '~> 2.3'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.3", ">= 7.1.3.2"

gem 'rack-health'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", ">= 5.0"

# Use SCSS for StyleSheets assets
gem 'sass-rails', '~> 5.0.7'

# Authentication
gem 'omniauth-cognito-idp'
gem 'omniauth-rails_csrf_protection'

# Use unicorn as the app server
gem 'unicorn', '~> 5.8.0'

# for frontend
gem 'vite_rails', '~> 3.0'

# 全環境で使う
gem 'dotenv-rails'

# Nokogiri の脆弱性対応
gem 'rails-dom-testing', '~> 2.2'
gem 'rails-html-sanitizer', '~> 1.6'

gem 'bootsnap', require: false

group :development, :test do
  gem 'spring' # , '~> 2.0.1'                # テスト高速化

  gem 'factory_bot_rails'                    # activerecord のモデルの生成
  gem 'faker'
  gem 'json_expressions'                     # JSON チェック用のヘルパー
  gem 'rspec-rails'                          # テストライブラリ
  gem 'spring-commands-rspec'                # spring で rspec を呼ぶために必要

  gem 'rspec-github', require: false         # GitHub Action’s annotations に表示

  gem 'spring-commands-teaspoon'
  gem 'teaspoon', '~> 1.2.2'                 # javascript テストランナー
  gem 'teaspoon-jasmine', '~> 2.9.1'

  gem 'rubocop',              require: false # コードの静的解析ツール
  gem 'rubocop-capybara',     require: false
  gem 'rubocop-factory_bot',  require: false
  gem 'rubocop-inflector',    require: false
  gem 'rubocop-performance',  require: false
  gem 'rubocop-rails',        require: false
  gem 'rubocop-rspec',        require: false
  gem 'spring-commands-rubocop'

  gem 'capybara', '>= 3.26' # rails のインテグレーションテスト

  # このバージョンで、依存関係にあるselenium-webdriver がバージョン3台になる。
  # selenium-webdriver のバージョン4台は破壊的変更があって設定がよく解らないので、しばらくはこのまま
  # gem 'webdrivers', '~> 4.6.0'
  gem 'simplecov', require: false
  gem 'simplecov-lcov', require: false
  gem 'webdrivers', '~> 5.0', require: false

  gem 'bullet'

  # console 表示
  gem 'debug'
  gem 'debugvisualizer'
  gem 'pry-byebug'       # debugger
  gem 'pry-rails'        # rails console で pry を使う

  # 手書きで書くと長くて、複雑で、エラーが起きやすいRailsのテストをワンライナーにする
  gem 'shoulda-matchers', '~> 5.3'
end

group :development do
  # 従来の rails s で unicorn を呼び出せるようにする
  gem 'unicorn-rails'

  # ruby error 時の画面でデバッグを可能にする
  gem 'better_errors'
  gem 'binding_of_caller'

  # rails console 内で Apartment::Database.switch が動作しなくなったため、コメントアウト
  # gem 'hirb'           # PryでのSQLの結果を綺麗に表示
  # gem 'hirb-unicode'
  # gem 'awesome_print'  # Object表示をキレイに表示

  gem 'annotate' # Model に  Schema Info を自動挿入する gem
  gem 'solargraph' # ruby用language serverの追加
end