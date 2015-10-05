module ComponentTag
  extend ActiveSupport::Concern

  module ClassMethods
    def component_tag(name, tag = 'div')
      define_method "hy_#{name}" do |options = {}, &block|
        defaults = {
          tag: tag,
          default_class: "hy-#{name}"
        }

        tag_with_defaults(options, defaults, &block)
      end
    end
  end

end
