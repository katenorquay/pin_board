class AddLinktoMedia < ActiveRecord::Migration[5.0]
  def change
    add_column :media, :link, :string
  end
end
